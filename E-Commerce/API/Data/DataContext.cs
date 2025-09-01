using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Product>().HasData(
            new List<Product>
            {
                new Product
                {
                    Id = 1, Name = "Iphone 16 Pro", Description = "256 GB", Price = 55000, IsActive = true, Stock = 20,
                    ImageUrl = "1.jpg"
                },
                new Product
                {
                    Id = 2, Name = "Iphone 15 Pro", Description = "512 GB", Price = 45000, IsActive = true, Stock = 13,
                    ImageUrl = "2.jpg"
                },
                new Product
                {
                    Id = 3, Name = "Macbook Air", Description = "256 GB", Price = 39000, IsActive = false, Stock = 50,
                    ImageUrl = "3.jpg"
                },
                new Product
                {
                    Id = 4, Name = "Iphone 16 Pro Max", Description = "512 GB", Price = 85000, IsActive = true, Stock = 40,
                    ImageUrl = "4.jpg"
                },
                new Product
                {
                    Id = 5, Name = "Samsung S24 Plus", Description = "256 GB", Price = 53000, IsActive = true, Stock = 90,
                    ImageUrl = "5.jpg"
                }
            }
        );
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Cart> Carts { get; set; }
}