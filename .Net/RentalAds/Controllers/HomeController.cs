using Microsoft.AspNetCore.Mvc;
using RentalAds.Models;
using System.Diagnostics;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;

namespace RentalAds.Controllers
{
    public class HomeController : Controller
    {

        

        public IActionResult Index()
        {

            List<Owner> owners = OwnerController.GetOwners();
            return View(owners);
        }
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Login(LoginViewModel model)
        {
            string userType = model.UserType;

            if(userType=="Admin")
            {
                
            }
            else if(userType=="Owner")
            {
               foreach(var owner in OwnerController.GetOwners())
                {
                    if(owner.OwnerContact == model.Contact)
                    {
                        if(owner.Password == model.Password)
                        {
                            return View(Owner owner);

                        }
                    }
                }
            }
            else
            {

            }
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
