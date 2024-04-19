using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RentalAds.Models
{
    public class Tenant
    {
        [Required]
        public int TenantId { get; set; }
        [Required]
        public string? TenantFirstName { get; set;}
        [Required]
        public string? TenantLastName { get; set;}
        [Required]
        public string? TenantLocation { get; set;}
        [Required]
        public string? TenantContact { get; set;}
        [Required]
        public string? TenantRequirement { get; set;}
        [Required]
        [DataType(DataType.Password)]
        public string? Password { get; set;}

        [Required]
        [DataType(DataType.Password)]
        [Compare("Password",ErrorMessage ="Passwords does not match")]
        public string? ConfirmPassword { get; set;}
        [Required]
        public DateTime RequirementDate { get; set;} = DateTime.Now;




    }
}
