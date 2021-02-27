### Don't debug into correctness

### Slide 1
Today I'm going to talk about a paper I read a while ago. It's called "No Silver Bullet - Essence and Accident in Software
Engineering" by Frederick P. Brooks Jr. 

So, who is Brooks?
He is an american software engineer and computer scientist, best known in my opinion for Brook's Law which states that
"Adding manpower to a software project makes it later". In reality, he is best known for managing the development of IBM's
System/360 family of computers which first introduced the 8-bit byte.
"The most important single decision I ever made was to change the IBM 360 series from a 6-bit byte to an 8-bit byte, 
thereby enabling the use of lowercase letters. That change propagated everywhere."

### Slide 2
What is the paper about?

accidental - arising from extrinsic causes

### Slide 3
Does it have to be hard? - Essential Difficulties
There are no silver bullets now in view, the very nature of software make it unlikely that there will be any.
What are the difficulties? - Following Aristotle, he divides them into essence - the difficulties are inherent in the
nature of software development - and -accidents - those difficulties that today attend its production but that are not 
inherent. (difficulties that attend the production of software but are not inherent to software)

### Slide 4
The Essence of a software en is a construct of interlocking concepts: data sets, relationships among data items,
algorithms and invocation of functions. This essence is abstract, in that the conceptual construct is the same
under many representations. (What does it mean in many representations?) 

It is nonetheless highly precise and richly detailed. 
The hard part of building software to the specification, design, and testing of this conceptual construct, not the labor
of representing it and testing the fidelity of the representation. We still make syntax errors, to be sure, but they are
fizz compared to the conceptual errors in most systems.
If this is true, building software will always be hard. 
Let us consider the inherent properties of this irreducible essence of modenr softraer systems: complexity, conformity,
changeability, and invisibility.

- complexity
software entities are more complex for their size than any other human construct, because no two parts are alike. If 
they are, we make the two similar parts into one, a subroutine, open or closed.
What is a subroutine? (https://www.youtube.com/watch?v=-1XToqEraxM)
In this respect software systems differ profoundly from computers, buildings, or automobiles,
where repeated elements abound (exist in large numbers).
The complexity of software is an essential property, not an accidental one. Hence descriptions of a software entity that
abstract away its complexity often abstract away its essence. 
Many of the classical problems of developing software products derived from this
essential complexity and its nonlinear increased with size. From the complexity comes the difficulty of communication 
among team members, which leads to productflaws, cost overruns, schedule delays. From the complexity comes the difficulty
of enumerating, much less understanding, all possible states of the program and from that comes the unreliability. From 
the complexity of structure comes the diffuculty of extending programs to new functions without creating side effects. 
From the complexity of structure comes the unvisualized state that constitute security
treapdoors. 
Not only techincal problems but managementp problems as well come from complexity. This makes overview hard thus imeding
conceptual integrity. It makes it hard to find and controll all the loose ends.

- conformity
software people are not alone in facing complexity. Physics deals with terribly complex objects



 

In 1972 the Association for Computing Machinery (ACM) acknowledged Dijkstra's seminal contributions to the field by 
awarding him the distinguished Turing Award. The introduction given at the award ceremony is a tribute to Dijkstra:
...programs should be composed correctly, not just debugged into correctness;...
