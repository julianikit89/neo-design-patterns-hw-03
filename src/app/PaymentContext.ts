import { PaymentProviderFactory } from "../core/PaymentProviderFactory";

export class PaymentContext {
  private factory: PaymentProviderFactory;

  constructor(factory: PaymentProviderFactory) {
    this.factory = factory;
  }

  public processPayment(amount: number): void {
    const provider = this.factory.createPaymentProvider();

    console.log("--- Starting Payment Process ---");
    
    provider.authorize(amount);

    const transactionId = Math.random().toString(36).substring(7);
    
    provider.capture(transactionId);
    provider.refund(transactionId);
    
    console.log("--- Payment Process Finished ---\n");
  }
}