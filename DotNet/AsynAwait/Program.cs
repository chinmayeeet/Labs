// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

/*
int count = 0;
count = await Method3();
Method4();
Console.WriteLine($"****VALUE OF COUNT = {count}");
void UseTraditionalThreading()
{
    Thread t1 = new Thread(new ThreadStart(Method));
    Thread t2 = new Thread(new ThreadStart(Method2));

    t1.Start();
    t2.Start();
    Thread.Sleep(1000);
}
void Method()
{
    for (int i=0;i<1000;i++)
    {
        Console.WriteLine($"METHOD 1: i=(i)");
    }
}

void Method2()
{
    for (int i = 0; i < 100; i++)
    {
        Console.WriteLine($"METHOD 2: i=(i)");
    }
}

async Task<int> Method3()
{
    int i = 0;
    for ( i = 0; i < 1000; i++)
    {
        Console.WriteLine($"METHOD 3: i=(i)");
    }
    return i;
}

async Task Method4()
{
    for (int i = 0; i < 100; i++)
    {
        Console.WriteLine($"METHOD 4: i=(i)");
    }

}*/

await SimpleTask();

File.WriteAllText(@"SomeFile.txt", "asdfghjklkjhgfcvvg");
string content = await ReadFile();
Console.WriteLine(content);
async Task SimpleTask()
{
    Console.WriteLine("Starting of the task");
    Task.Delay(2000);
    Console.WriteLine("Task Complete");
}

async Task<string> ReadFile()
{
    using (StreamReader r = new StreamReader(@"SomeFile.txt"))
    {
        return await r.ReadToEndAsync();
    }
}