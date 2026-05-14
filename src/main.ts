import process from "process";
import { PaymentContext } from "./app/PaymentContext";
import { PaymentProviderFactory } from "./core/PaymentProviderFactory";
import { StripeFactory } from "./providers/stripe/StripeFactory";
import { PaypalFactory } from "./providers/paypal/PaypalFactory";
import { AppleFactory } from "./providers/apple/AppleFactory";

const providerArg = process.argv[2]?.toLowerCase();

let factory!: PaymentProviderFactory;

switch (providerArg) {
  case "stripe":
    factory = new StripeFactory();
    break;
  case "paypal":
    factory = new PaypalFactory();
    break;
  case "apple":
    factory = new AppleFactory();
    break;
  default:
    console.error("Будь ласка, вкажіть провайдера: stripe, paypal або apple");
    console.log("Наприклад: npx ts-node src/main.ts stripe");
    process.exit(1);
}

const context = new PaymentContext(factory);

context.processPayment(100);