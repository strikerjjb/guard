using System;
using System.Threading.Tasks;
using guard.Core.Repositories;

namespace guard.Core.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
         IEmployeeRepository Employee { get; }
         Task<int> CommitAsync();
    }
}