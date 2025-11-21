1. How does Typecript enforce type safety in this OOP?
By using type annotations, compile-time checking and interfaces these help make the program reliable and prevent run time errors. The specificity, extra checks and enforcement
are all part of it.

2. How does inheritance reduce code duplication for PhysicalProduct and DigitalProduct?
They share common properties but by putting them in a base class we avoid re-writing them in the subclasses. The subclasses only implement what is unique.
Inheritance allows code reuse without repeat code.

3.What are the benefits of encapsulation and access modifiers in this context? 
Private properties prevented outside code from modifying it directly, getters exposed a formatted value without exposing it in its raw form and 
public methods define a safe interface for interacting with objects. 

4. If you added a new type of product how would polymorphism make this extension straightforward?
It allows a new product type to be extended to "Product' and override methods as needed. It can be added without modifying any gcode.
This allows allows extensions to be straightforward without needing to constantly making modifications. 
