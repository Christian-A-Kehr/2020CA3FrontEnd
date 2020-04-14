• What is the advantage (if any) for a REST-based API of using JWT’s compared to session Cookies

it's is signed (we can verity the user), can be shared among many services and is used by almost all tecknologies/languaes 

• What is the disadvantage (if any) with the implemented JWT-solution

Token is useable by any whom possess it and is vulnerable to XSS and CSRF attacks.   


• What will a client (Single Page WEB, Mobile App, etc.) have to do in order to use this API

 Make the proper request with valid credentials and provide the JWT 

Before you start, make sure you understand topics like: 

	• why you cannot ever, ever, never store users passwords in plain text (even if you are making a site for your son’s football club)

	Do to GDPR, and the fact that most users uses the same credentials for other places. Withs means you may provide hackers with potentially more access's, to more sensitive data.   

	• why old hash-algorithms like SHA1 is almost as bad as storing passwords in plain textIn time hash-algorithms will be map out by hackers therefor more up to day algorithms is needed.  

	• 

	• rainbow tablesHacker uses scripts to check common used login credentials, like; user, pasword123 and so on.  

	• bcrypt, and why slow is good: 

	Bcrypt, will help solve the brutforce and rainbow tables assaults, by slowing the time of execution, thereby making it a very painful process.      
	
	• why we need an algorithm we can make even slower, as time goes by.
		It's at a matter of performances vs security. For example a legit user should not suffer unnecessary do to security.
		On the other hand, an hacker should meet more and more security the more the hacker is suspected of foul play.     

Answer these questions before you continue:

	• Did this logout involve the server:
		
	No
	
	• Is the token (if kept somewhere, still valid?)            

		Until time period (30 min ) has passed  yes. 

	•       If your  answer to the question above was yes, is this a problem?, and if, how could it have been solved?

		Yes it leaves a security gab, due to the fact that the token could be intercepted. 
