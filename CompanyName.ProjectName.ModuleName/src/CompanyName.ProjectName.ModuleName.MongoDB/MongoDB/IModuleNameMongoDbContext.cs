using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace CompanyName.ProjectName.ModuleName.MongoDB;

[ConnectionStringName(ModuleNameDbProperties.ConnectionStringName)]
public interface IModuleNameMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
}
