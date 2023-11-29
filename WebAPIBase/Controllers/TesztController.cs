using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPIBase.Controllers
{
    [HttpGet]
    [Route("corvinus/nagybetus/{szoveg}")]
    public IActionResult M2(string szoveg)
    {
        return new ContentResult
        {
            ContentType = System.Net.Mime.MediaTypeNames.Text.Plain, //"text/plain"
            Content = szoveg.ToUpper()
        };
    }
}
