using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;

public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.ConfigureAppConfiguration((hostingContext, config) =>
                {
                    // サーバー設定の読み込み
                    config.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
                })
                .Configure(app =>
                {
                    app.Run(async (context) =>
                    {
                        // サーバー設定の取得
                        var serverName = context.Configuration["ServerName"];
                        var serverPort = context.Configuration["ServerPort"];
                        var environment = context.Configuration["Environment"];

                        // レスポンスの作成
                        await context.Response.WriteAsync($"Server: {serverName}\n");
                        await context.Response.WriteAsync($"Port: {serverPort}\n");
                        await context.Response.WriteAsync($"Environment: {environment}\n");
                    });
                });
            });
}