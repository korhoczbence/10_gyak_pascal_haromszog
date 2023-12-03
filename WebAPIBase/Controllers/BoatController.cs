using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPIBase.Models;

namespace WebAPIBase.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class BoatController : ControllerBase
    {

        [HttpGet]
        [Route("questions/count")]
        public int M1()
        {
            HajosContext context = new HajosContext();
            int kérdésekSzáma = context.Questions.Count();
            return kérdésekSzáma;
        }


        [HttpGet]
        [Route("questions/{sorszám}")]
        public ActionResult M2(int sorszám)
        {
            HajosContext context = new HajosContext();
            var kérdés = (from x in context.Questions
                          where x.QuestionId == sorszám
                          select x).FirstOrDefault();

            if (kérdés == null) return BadRequest("Nincs ilyen sorszámú kérdés");

            return new JsonResult(kérdés);
        }
    }
}
