var a = 256
var b = 144
var gcd
while (a!=b)
{
	if (a>b)
	{
		a = a -b
	}
	else
	{
		b = b - a
	}
}
gcd = a
console.log(gcd)