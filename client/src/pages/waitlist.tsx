import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod"; // validates form data against a predefined schema (insertWaitlistSchema)
import { useMutation } from "@tanstack/react-query";
import { insertWaitlistSchema, type InsertWaitlist } from "../shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useToast } from "../hooks/use-toast";

export default function Waitlist() {
  const { toast } = useToast();
  
  const form = useForm<InsertWaitlist>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertWaitlist) => {
      const response = await fetch('http://localhost:3000/api/waitlist-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: 
        JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('network response was not ok');
      }
      return response.json()
    },
    onSuccess: () => {
      toast({
        title: "Successfully joined waitlist!",
        description: "We'll be in touch soon with updates.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error joining waitlist",
        description: "Please try again later.",
      });
    }
  });

  return (
    <div className="flex-1 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: '#37474f' }}>
              Join Our Waitlist
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Be among the first to give your dog the nutrition they deserve. Sign up for early access and exclusive updates.
            </p>
            <div className="w-full h-90 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Happy dog"
                className="rounded-md shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your dog and what you're looking for..."
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={mutation.isPending}
                  style={{ backgroundColor: '#6fceb7' }}
                >
                  {mutation.isPending ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
