using Volo.Abp;
using Volo.Abp.MongoDB;

namespace CompanyName.ProjectName.ModuleName.MongoDB;

public static class ModuleNameMongoDbContextExtensions
{
    public static void ConfigureModuleName(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));
    }
}
