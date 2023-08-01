using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace CompanyName.ProjectName.ModuleName;

[DependsOn(
    typeof(ModuleNameApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class ModuleNameHttpApiClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(ModuleNameApplicationContractsModule).Assembly,
            ModuleNameRemoteServiceConsts.RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<ModuleNameHttpApiClientModule>();
        });

    }
}
