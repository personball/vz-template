using System.Threading.Tasks;
using Xunit;

namespace CompanyName.ProjectName.ModuleName.Samples;

public class SampleManager_Tests : ModuleNameDomainTestBase
{
    //private readonly SampleManager _sampleManager;

    public SampleManager_Tests()
    {
        //_sampleManager = GetRequiredService<SampleManager>();
    }

    [Fact]
    public Task Method1Async()
    {
        return Task.CompletedTask;
    }
}
