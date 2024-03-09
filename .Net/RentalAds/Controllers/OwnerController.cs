    using Microsoft.AspNetCore.Mvc;
    using RentalAds.Models;

    namespace RentalAds.Controllers
    {
        public class OwnerController : Controller
        {
            private static List<Owner> owners = new List<Owner>();
            private static int ownerIdCounter = 1;
            [HttpGet]
            public IActionResult OwnerRegistration()
            {
                return View();
            }
            [HttpPost]
            public IActionResult OwnerRegistration(Owner owner)
            {

                if (ModelState.IsValid)
                {
                    owner.OwnerId = ownerIdCounter++;
                    owner.AdDate = DateTime.Now;
                    owners.Add(owner);
                    return RedirectToAction("Index","Home");
                }
                else
                {
                    return View(owner);
                }

            }
            public static  List<Owner> GetOwners() {

                return owners;
            }
      
                
       

        }
    }
