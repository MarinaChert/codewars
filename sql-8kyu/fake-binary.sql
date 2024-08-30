-- DESCRIPTION:
-- Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

-- Note: input will never be an empty string

-- Solution
select x, 
    replace(replace(replace(replace(replace(replace(replace(replace(replace(x,'1','0'),'2','0'),'3','0'),'4','0'),'5','1'),'6','1'),'7','1'),'8','1'),'9','1') as res
from fakebin