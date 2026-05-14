# neo-design-patterns-hw-03

Запуск проєкту:

npx ts-node src/main.ts stripe
npx ts-node src/main.ts paypal
npx ts-node src/main.ts apple

npx ts-node src/main.ts stripe
[Stripe] Authorizing $100
[Stripe] Capturing transaction 4g7rfa
[Stripe] Refunding transaction 4g7rfa

npx ts-node src/main.ts paypal
[PayPal] Authorizing $100
[PayPal] Capturing transaction epv2y
[PayPal] Refunding transaction epv2y

Factory Method: Створення об'єктів у спеціальні класи-фабрики.

OCP (Open/Closed Principle): Якщо з'явиться провайдер "GooglePay", треба просто створити нову папку з класом і фабрикою, не змінюючи логіку в PaymentContext.

DIP (Dependency Inversion): PaymentContext залежить від інтерфейсу PaymentProviderFactory, а не від конкретних Stripe чи PayPal.
