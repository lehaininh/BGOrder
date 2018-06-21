# BGOrder
### Tech-stack:
- Node v6.
- Mysql 5.17 (similar version will do).
- Yarn for package manager (or of course it's fine with npm).

### How to:
- 'yarn install'.
- 'yarn dbsetup-local' to setup the database (you will need to provide your root password of your db setup).
- 'yarn start'

### Q&A:
- Why did you pick your first particular your design? What assumptions did you make, and what tradeoffs did you consider?
    -> To avoid duplications and keep the single source of truth. Customer/ Item/ Address/ Order each has their own tables. With suitable Foreign Key. The db schema can be found here: https://github.com/lehaininh/BGOrder/tree/master/scripts/ddl/data.

With separated tables it comes with a lot of 'JOIN' query, or everything needs to be populated after the id (whether it's customer_id, item_id..) is received <- this is what I did. Everything takes an extra step or two. And your boss can't just look at a single database table to get the idea of how the business is doing.

- What did you consider when you had to design the second solution? And which assumptions and tradeoffs you made?
    -> There's no 2nd design. I always design DB this way, it fits the 2nd requirements already. My most important thing when designing DB is always **'single source of truth'**
    
- Node/JS pros:
    - It's a interpreted language. Meaning I don't need an IDE (I use Vim mostly). 2 other languages I know if Pascal and C#, both compiled language, not a fan.
    - Easy to learn. Sample reason I picked Node when I got back to programming.
    - Basically same piece of code on both server and client side.
    - Asynchronous IO helps with request handling.
    
- And cons:
    - JS is a 'Loosely typed' language. It gets confused some times.
    - I believe it's moving too fast. I'm still using Node6. And Node10 is already there. A lot of establised langauge (Java..) don't change much through a pretty long period of time. Changes are good, but it also means Node is not stable, yet.
    - Open tools from the community are not always good quality.
    
