import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePropmise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePropmise) {
    stripePropmise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
    );
  }

  return stripePropmise;
};
