// See https://aka.ms/new-console-template for more information
using RestSharp;

Console.WriteLine("Hello, World!");

RestClient client = new RestClient();
RestRequest req1 = new RestRequest("https://localhost:7280/api/Name/authenticate", Method.Post);
req1.AddJsonBody(new
{
    username = "test1",
    password = "password1"
});

var response1 = client.Execute(req1);
Console.WriteLine(response1.Content);


Console.ReadLine(); //type enter to exit the application

