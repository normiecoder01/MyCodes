using Microsoft.AspNetCore.Mvc;
using RentalAds.Models;

namespace RentalAds.Controllers
{
    public class TenantController : Controller
    {
        private static List<Tenant> tenants = new List<Tenant>();
        private static int TenantCounter = 1;
        [HttpGet]
        public IActionResult TenantRegistration()
        {
            return View();
        }
        [HttpPost]
        public IActionResult TenantRegistration(Tenant tenant)
        {
            
            if(ModelState.IsValid) 
            {
                tenant.TenantId = TenantCounter++;
                tenant.RequirementDate = DateTime.Now;
                tenants.Add(tenant);
            }
            return View();
        }
        public static List<Tenant> GetTenants()
        {

            return tenants;
        }
    }
}
