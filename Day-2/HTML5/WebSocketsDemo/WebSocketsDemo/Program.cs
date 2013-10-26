using Fleck;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebSocketsDemo
{
    class Program
    {
        static IWebSocketServer server = new WebSocketServer("ws://localhost:9090/SocketServer");
        
        static void Main(string[] args)
        {
            List<IWebSocketConnection> conns = new List<IWebSocketConnection>();
            server.Start(con => {
                con.OnOpen += () =>
                {
                    Console.WriteLine("A new Connection is established");
                    conns.Add(con);
                };
                con.OnMessage += (msg) => {
                    Console.WriteLine("Message received - {0}",msg);
                    foreach (var cn in conns) {
                        if (cn != con)
                            cn.Send(msg);
                    }
                };
                con.OnClose += () =>
                {
                    Console.WriteLine("An existing connection is closed");
                    conns.Remove(con);
                };
            });
            string input = string.Empty;
            while((input = Console.ReadLine()).ToUpper() != "EXIT" )
                foreach (var cn in conns)
                {
                    cn.Send(input);
                }

        }

    }
}
