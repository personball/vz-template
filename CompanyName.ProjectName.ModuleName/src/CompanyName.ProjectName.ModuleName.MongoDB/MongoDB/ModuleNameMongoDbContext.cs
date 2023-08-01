using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace CompanyName.ProjectName.ModuleName.MongoDB;

[ConnectionStringName(ModuleNameDbProperties.ConnectionStringName)]
public class ModuleNameMongoDbContext : AbpMongoDbContext, IModuleNameMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureModuleName();
    }
}
