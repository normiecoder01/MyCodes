using System.ComponentModel.DataAnnotations;

namespace RentalAds.Models
{
    public class Owner
    {
        public int OwnerId { get; set; }
        [Required]
        public string? OwnerFirstName { get; set; }
        [Required]
        public string? OwnerLastName { get; set; }
        [Required]
        public string? OwnerContact { get; set; }
        [Required]
        public string? OwnerRequirement { get; set; }
        [Required]
        public string? OwnerLocation { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string? Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Compare("Password",ErrorMessage = "Passwords do not match")]
        public string? ConfirmPassword { get; set; }

        public DateTime AdDate { get; set; } = DateTime.Now;

    }
}
