import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // validates form data against a predefined schema
import { useMutation } from "@tanstack/react-query";
import { Input } from "../components/ui/input"; // You can replace this with a plain `<input />` if needed
import { Textarea } from "../components/ui/textarea"; // You can replace this with a plain `<textarea />` if needed
import { Button } from "../components/ui/button"; // You can replace this with a plain `<button />` if needed
import { useToast } from "../hooks/use-toast";
import axios from "axios";

export default function Waitlist() {
  const { toast } = useToast();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Mutation for submitting the form
  const mutation = useMutation({
    mutationFn: async (newWaitlist) => {
      return axios.post(`${import.meta.env.VITE_API_URL}/api/waitlist-form/post`, newWaitlist);
    },
    onSuccess: () => {
      toast({
        title: "Successfully joined waitlist!",
        description: "We'll be in touch soon with updates.",
      });
      reset(); // Reset the form after success
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error joining waitlist",
        description: "Please try again later.",
      });
    },
  });

  // Form submission handler
  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex-1 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: "#37474f" }}>
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Tell us about your dog and what you're looking for..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}