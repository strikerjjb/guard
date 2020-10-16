using Microsoft.EntityFrameworkCore;
using guard.Core.Models;
using guard.Data.Configurations;

namespace guard.Data
{
    public class guardDBContext : DbContext
    {
        public DbSet<Employee> Employee {get; set;}

         public guardDBContext(DbContextOptions<guardDBContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder
                .ApplyConfiguration(new EmployeeConfiguration());
        }
    }
}