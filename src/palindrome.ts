        function palcheck()
        {
            var input = (<HTMLInputElement> document.getElementById("test")).value;
            var input2 = input.toLowerCase();
            for (var i = 0; i < input2.length/2; i++) 
            {
                if (input2[i] !== input2[input2.length - 1 - i])
                    {
                    alert("NOT A PALINDROME");
                    return;
                    }
            }
             alert("This is a PALINDROME");
        }