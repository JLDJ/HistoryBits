import { Component } from '@angular/core';
import { ViewController, Events, NavController, NavParams} from 'ionic-angular';
import { PictureTemplatePage } from '../picture-template/picture-template';
import { StoryTemplatePage } from '../story-template/story-template';
import {Camera} from 'ionic-native';
import { ImagePicker } from 'ionic-native';
import { forwardRef, NgZone} from '@angular/core';

/*
  Generated class for the Post page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {
  private imageSrc: string;           //Used to test that a base64 image would work
  public base64Image: string = "";  /* "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEsASwDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAQBAgMFBwgG/8QASBAAAQMCAgYFCQYDBQkBAQAAAQACAwQRBSEGEjFBUWETInGBkQcUMkJSobHB0QgjM2Jy4RVTkiQ0Q4LwFiVEY6KywtLxc5P/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBQQG/8QAKhEBAAICAgECBQMFAAAAAAAAAAECAxEEIQUSMRQyUWFxEyJBM4GRobH/2gAMAwEAAhEDEQA/AO/oiICIiAiIgIiICIiAiIgIrXSNYwueQ1o2kmwC+Px7yp6HaPFzKnGYJp27YaU9K4HgdXIHtKD7JLrhmKfaHDi5mBaNzz8JqqTVb/S0H4hfHYj5ZtPa2/RTUlA07oYgSO83QepLqlxxXjOu0400rCTUaU4nntEU7owe5pAWiqcUxOodeoxSslPGSdzviUHuYzwtNjKwdrgrmvY70XA9hXgs1NTf+8zf1lG11Yw3bVzg8pCg963CrdeGaXS7SSit5rj+KQ23R1kjR7ivoKDywadUBGrjs07R6tQ1snvIv70Hsa6LzRhX2jcepiBieE0VazeY3GFx+I9y6Bgn2gNE8R1WV7KrDZDt6Vmuwd7fog6ui12F49hONwCbC8RpayM74JQ63bbYtgDdBVERAREQEREBERAREQEREBERAREQEREBERARWvkZGxz3uDWtFySbABck0w8tdJRTvwvROAYtiPomYA9DGe3LWt4c0HUMUxWhwaifWYjVw0tOz0pJXAD/AOrkmkHl5hfK+j0RwyXEJhkamZurEOYG099lzqrw/FdJK4YjpViMtZNe7YA60cd9wGwdy2UdPDTRCKCNscY2NaLBXSba3F67S3ShxfpBjsvQu/4WmOowDhYWHx7VrY8FoKMfd07S72n9Y+9b2oljhbeR7WjmVq5p3yj7mFzh7b+qPfn7lRDnaBkBktXUDatjNHM6/SSho4Rj5la2eBmd7u7TdQa6YtBsSB3qHIQp0rA3YAOxQ5CL7QoIx2qwrI4hWFFWoiICIiCTRV9Zh1S2ooqqWnmbsfE8tI7wuoaL+XrSbByyHFtTFqUWBMgDJQP1AZ94K5MiD2Rol5VNGdMCyKkrDTVrv+FqrMfflnZ3cV9uvAIcWkEGxC6joT5bce0adHSYk44phoNtWUnpWD8rt/Yb9yD1ai+f0V0zwPTCgFVhNY2QgDpIXZSRHg5vz2Lf3CCqIiAiIgIiICIiAiIgIiICIiATYXWn0i0lwrRfCpMRxaqZBC0dUE9aQ+y0bytZpxp1hmhGEGqrXGSpkBFPSsPXld8hxK4FU/xbTPFv43pPIXNvemohkyJu4W8OZ3oNhpJpnpD5SJXQwulwnR6+UbSdecfmO/s2dtlZQYZSYZAIqWFrBvdbN3aVLa0NAa0AAZABQ5Kt8zzFRtDnA2fK70GfU8grpGaeeKnZrSvDc7AbyeAG8qI51VU+g3zaP2ni7z3bu/wUiGjZE4yvJlmO2R+3uG4diwyVmu4x0rOmeDYuvZjTzP0uqjCKSKJ2uQXyfzHm7vHd3KFPVRaxbHeV42iMXt2nYO9TH0b5c6qUyfkb1WDu396sfG1jdVrQ1o2ACyDTTecSX6rIxzOsfDZ71rZ4TnrSPPZl8FuqpzI2lz3NaOJNlqZpWuvqNe7sH1UVq5YmA+iDzOahyNHBbCbpD6gHac1Bka7eR3BQRXhYiszweKxFFWlUVVRAREQEREBERBOwrGcQwPEIq/DKuWlqYzdr43W7jxHIr0n5N/LTRaS9FheO9HRYoRZkt7RTnlf0Xct/uXl5VDiCCDayD36HXVV528lflofSvhwPSioL4D1Keuftj4Ned457t69DxvEjA5pBaRcEbCEFyIiAiIgIiICIiAiIUAkBfKadacYfoRgpraoiSokOpTUwPWlf8hxK2ekukVBovgVTi2IyBkMLbht83u3NHMrzd5ziGmekEmk+N31XH+x0pzbEwbLD/Vzmgn0dHX6RYq/SLSF/TV0uccR9GJu4AbtuQ+a2lTCIWOe4hrWi5JOQSGpbC0ue4NY0XJJyASOM4y4TTNLaRpvHEdsh9p3LgPFZI1BEuIHLWipNxGTpfo33lZpJYKKBoIDWjqsYwZnkAFLxF4pntiiZ0s7xdsYNsuJ4DmocFH0cnTTu6WoIsXkWDRwaNwRGHoJqzOqvHFugacz+o/Ie9SQxrGBrGhrQLAAWAVZpo4IzJK8NaN5Khnzisz61NBu/mO/9fj2IKVFVHG/oxeSXdGwXP7d6hSR1U3puELPZZm7x+nitlHTxQM1ImBo38+Z4rFKEGnfSRRu1g27/AGnZnxKhTt2rbztsCTktTPNGSQwl54MF7fRRWrnatfK3NbObpHbIrfqK18rJLnNo7kEF4WFwUiRp4+5YHAqKxlWq8q1BRERAREQEREBERAG1dr8j/ladhMsOjmPT3w9xDKSoefwDsDXH2dluHZs4oqg2N0Hvxr2uaCHAg7CFcuD+RHynGsbForjU95mi1FUSOzeP5ZPEbuWS7uDdBVERAREQEREBWyPbHG573BrWi5J2AK5ci8temEtFQw6J4ZJ/vHFB96WnOOG+fZexHYCg+E0z0kk8pGl7ooXuGj2FyFsY2Cd+93O9suXC6kNaGtDWgAAWAG5RMMoIsMw+KliGTB1j7R3lUqnuqJRRxOLbi8zx6reA5n4XVRaP94zX/wCEjds/muH/AIj3lbF+Iup9SKJuvUSZRt3dp4AKLNNHR0wIZkLMZG0bTuASjgdFrTTEOqJLF5GwcGjkFUbmjo2Rxuc53S1Emckp2uPyA3BQsRc2kA6pfI82ZG3a4/63o/EhSMb1S+R51Y427XHh+6l0lICHVFQ4SVUg6zhsaPZbwCDSx0j3SierIfKPRaPRj7OJ5qQVPqKctOxaqqqW05DA0yTO9GNu0/Qc0FZXNYwuc4NaBcknILXPqJaj+6x9T+bJkO4bSpApHSOE1Y4PcMxGPQZ9TzPuWJ9S+e7aRgeBkZXZMHZx7vFBClo2nrVDzKRn1smju2KBLPFbVhaZAP5Yy8di2j6FrjrVDjM7b1vRHY1YZ2hrSTYAINFMJneo1g5m59y180b97x3BbeeaIkhri88GAn4LXzFx2ROHaQorVyMPtFRntPFTpWv9geKiyA+z71BGN7qxZXd4WMoq1FVUQEREBERAREQEREGSGeWmmZNDI6OWNwcx7TYtI2EFevfJVp6zTfRwGd4GKUlo6pmzWyyeBwPxBXj5fTaC6W1GhmlNLisJJiB1KiLdJGdo7d45hB7ZRRcOrqfEsPp66lkElPURtlje3YWkXClICIiAiIgh4rilNg2F1WI1jwynpozJI7kB8V5ew6rqtJcdr9KsRB6arkIhYTfo2DIAd2Xcui+XnH5H0+HaI0cmrNXSCWoI3RDYD2nP/KvjKeOOmgjgiGqxgDWjkrCSyVFQKeB0hzIya0bXO3DxVtJCYIiZCDK860juJ+g2dyja3nNfn+HT7ObyPkPjyV1Y8zOZRsJBkzkI3M3+OzxVRdT/ANsn88d+G27YBy3u7/h2qVLMyCF8r3Wa0XKN1WtDWgADIAKHfzysP8inds9qT9vj2IM1JE90hq5xaV4s1h/w28O3j+y21PUapzKg3WGpqjTtaGDXmedWNnE/QbUG4q6wuLaamaJKp4uAdjB7TuXLetdNSQ4ZE+aaQvkd6Ujh1nncAPgAlJNHhdO+aZ5fI43kfbN7twA9wCnUtM6rf55WW6X/AA4toiHzdxPcOYaM08tYderBZF6tPx/Vx7Nnassro4Yy57msY0bSbABTcSe2lLWhpfK/0I27XftzWtbRue8TVZEkgzawegzsG88z7kER8s9R/d49SM/4sgOfY362UaShYTeUumd+fMDu2LZVNRHAQ1xLpHeixou49yhPjqps3OEDT6res7vOwe9BAnY1gzs0LVzSREnVcHfpGt8Ft5qSniBe8A22ukN/eVqqnEKFlx07DybmosNdKR7L/wCkqFJbmO0FTJcRpHXs8n/KVFfUwP2P8QgiusdhHcsLhmpTg1+YIKwOZwPiorEQrVeeatKCiIiAiIgIiICIiAg2oiD0X9nzTM1NFU6LVkt5KcdNSax2sPpN7jn3ngu6DMLwxotj0+jOktBjFO461NM1zm+2z1m94uF7ew+thxHDqetpna0FRG2SN3EEXCCSiIgK2RzWML3GzWi5J3BXL43yqY6dH/J3i1Sx+rPLEaeEg2Ic/q3HMAk9yDgldix0o0/xnSB51oek6Cm4BjchbuF+8qTPUiGB8m0gZDidwWkwWMUeFQRbHEazu05qTLL0lRDFfqg9I4dmz359yyYtlTDzemaHnrek93FxzJ8VbROLw+qd6UxuBwaNn171Cqpi+NsINjKdQ9m/3KU2UAADIDYgkVVQ6OG0f4rzqMHM/TM9yy07GwQMiZsaNp38ytayTpq50nqQjUb+o7fdYeKmiVBKdK1jS57gGtFyTuUakBle6slFnPFmNPqM+p2n9lHqH+cTMpfV9OTsGwd5+BV9S8zyMpGmweNaUjc3h37PFBmpyaucVb/wmH7hvH8/fu5dq2T8S81Y0Nb0krzqxx3trH6c1CdKyGIucQ1jG3PAALFRte+Q1cotI8WY0+o3h37T+yDfUdG1rXSyv6Wqk/Ek+Q4AcFrK10k076ejsSw2kmIuGHgOLvhvR1ZLNL5lA8sNgZZRtYOA/MfdtWXFsWw7R/CA54aLDVihac3n/W0oNZKKTCoHzTSBg2vlkN3OPPj2L5DE9MHvcWYfGGt/mPGfcFpsSxSux2u1pS52sbRxMvZvIBfQYXoc1jBUYpJYfygfifktV8laR29fG4eXkW1SHy7nV2JzZ9LO87szZbGn0RxecAmnEYO+RwHu2roFNTx08QjpKZkMfEtt7tp71n6Jx9KV3dkvJblz/EO9h8FTW8lt/h8GNB8RtnLB/UfosM2heKxi7GxycmvA+Nl0PoW8X/8A9HfVU6G3oyPHff4rD4q70z4TjzHW/wDLk9VhddRH+0U0kfMjLxUfpHDI5rrzmSauq4MladoIsf39y0OI6L0GIBxph5rUW9ENsD3cOYW6nKifmc3keDvWN4p39pc/uHbFaRZS8RwuqwyoMVRGWn1XbnDkVFBvkdq9UTE9w4d6WpPptGpWKiuIzVCFWKiIiAiIgIiICIiAvUnkC0k/iuhT8JmfrT4ZJqNvt6JxJb4G47gvLa6d5CseOD+USKle60GIxOp3AnLW9Jp7bi3+YoPWKIiAuGfaIxQubo/gTHZTSvqJQODbNb8XeC7kdi8ueWbEvPfKrLFe7aKmZEORI1j/ANyDQNnsABuVsM2tLLITtIaOwfvda7ziwvdUgm1Ym8SLntKqNo2bXqy6+UbbDtO33AKS6qEcbnuOTRcrSwT5Odf0nE92wLJLPrNaz2nAfP5INvSPMcDQ70jm7tOZUoTWF7rUNnSac9CWA2L7MB4X3oNpRy6zH1DjYynW7G7B7viVloXlzHVDvSmOsL7m7h4fFauaUGBsIyDyGZcN/uuprZw0bbABVEqZ/nNSyn9RlpJP/EeIv3KTUVPQQ6zRrPJDWN4uOxayikvGZnelKdfsG4eFlljk6euLzm2Aao/Udp8LeJQS+niwjD5J5n3DRryP3vcVzjEcRq8dxMyP1nOedWKMeqNwC22l2KGeobQxu+7i6z7b3ft81P0PwhsUJxOdvWOUQPDeVqy5IpXb18Li25OWKR/f8NjgeBQ4PA2SRgkrXjw5D6rdsh6wfIdeTcdw7FVjLEvd6R28uSkRMOtrEdi5drzee33GLBjwUitY6hTonHeE6J3EKkjiXEbgrVh03R6pje1/RO4hOidxCssRtCJ0urfVc5haLnZyWJ8bZB1h2EbQpMZ1mkE3WItLdosrP2Ss7/bZrq2ihroDSVrQ9rvQk2G/yK5xjGETYRWmKTNhzY8esF1V7A9pa4ZFazF8MbiuHPppLdMzrRv5rfgzTSdT7OX5Px8Z6eqvzR/v7OXNOsOaoRuVz2Pgmcx7S1zTZwKuc24v3rpPjZjU6lhISyvIVtkRaiqqICIiAiIgKZhOIS4Ti1HiEP4lNM2VvMtN1DRB75paiOrpYamJ2tFMwSMPEEXCzL43yWYl/FPJtglQTdzIOhcebCW/JfZIKHYvGenFcazykaSVF7jz6SMHiGuLR7mhezDsXhXE6g1GN4jOTnLUyPPe4lBc+W8ZHEWV5ms02UEv+KqX9UoifHLqsaL7AAr+mvK3PYCf9e9QBIqtk65N9yo2zZ+auM2tLGL7Ln5fNa1svNXtl+9OewZINq2bWqGcGtJ7zl9VIlnvA5oObrN8TZaiOb71xvuAWbptZ8Yv61/cg3rZwxl75NCrBUCmoTK/c0yO7TmtTJNeBzb+l1fHJW4vUluFyNB9KzUNNDTRyYpijGE3fPJme0rq0MLIIooIxaOJoAHuC+B0KpxLjfSkZQsLh2nL5ldEA2rn8u37oq+s8DgiMU5PrP8AxfGAXgFXPkNyG5c1azJ4VD6RXk307mom/allnawNHPisLTZ7e1ZtcLKrDNM+0LlhkZq5gZLJrhWvddhVn2a8dpizECQbg2WZp6RhuFhWSI2aVjVvyR1tjVjxYh28fBXptWLP3c90zoBS4m2oY2zJ23OXrDatDENaPsX3mmlOJcEEu+J4Pccvovg6PN7m8Qurx7eqkPh/LYYxcmYj+e1ura44KwtsVLdHZ57FiezrBbnNRyFQhZnMyKsLUGNFeQqEZILEV1lTegoiqiD1L9nqsNT5OZICc6avkjA5FrXfFxXWVw37Nc5dgeO098mVMbx3tI/8V3JBjnNqeQjaGn4LwbUuPnlR/wDo74r3pI3Wjc3iLLwXXNLMQqWEZtlePeUGLWVS7JWEql0GYPVQ7MrDdVvmgkB6ua/rFRwVUOzQTGSdZ3asol+8b3qC12ZV4f1mojZGbJv6h8VixWUuo2j84+BWDpOr3j4qlY7XphycCqPoNAh/aKw/kHxX3K+D0EkDa+pj3ujuO4r7xcvlf1H23hZieJGvuqNqpvKdiWvszC0fw6W9XEvffmqghu3Mquu3gFlES15L1np0zANCKGpwWCWeESvnYHmQv2X4WXP8ZoW4bjNXQsfrshkLWu4hTaHSzF8OovNKarc2HY0HPV7OC1Ek5lkfJIdd7yS5zsySd91vy2rasRWHM4eLNizWvktuJ9mNXsOXerbezchAbEDmvPEduteYmvSiIixbWo0oaHaOVn6Wn/qC5xhzdarA5FdD0slEejlQDteWtH9QPyK+DwSIyVxNvRYSulxPkfH+emPiI/CTJF97s3LBJFm3t+RW2fDeodlsaFHmh67BbeT7l6nDax8dgViczqX5LYzRWjeeAJWGSK0fgoIRYrHNyKmuiWJ8fVPggjFqpq5qQWclbqdbuRWC2aWWUszTUQd6+zST0WkLd2tCfc5d9XB/s1x2pNIpLf4sLfc9d4QDsXhnS6l8y0yxultboa+dnhI4L3MV458sFAaDyo4021mzSCdv+ZoJ990HwyIiCt0VEQVuq32K1EF4dmr9bYsV1ddBmDriyuLteIjksAdkr2usSg2OjVZ5njtO9xsxx1Hdhy+i6jvXGs2SAg7DcLqGB4kMTwqKYG8sYDZBzH12rxcuntZ9L4HkxHqwz+YbUkDO6HVAubC6tJDoyRmLJ1ejaXWtZeOH0F5iZ0qA0i4S7NmStbYvuxp1QMzsRxY11tW/cqx61vS86oFzs4q0FhNrhWAnoSb5XVS+MssLXtlkqx3H0ZC0NBJFgqBzdgtmrHm2prbN6va+Mus0C/6VGUTG+oXWPBUJsri4naVifI1gc97g1jBck7ljrvpt9Wo3Z8lp1WBsNPRg9Zx6Rw5bB81rdGKUmKeoI2kNHxPyWrxivdi2KyTNBIcdVjeW5faUtH/C8GjjteQNFx7Tzu8Suthp6aRD4PyHI/X5Frx7IbItd80lsi7VHdl8bqPJDrVVvZZfxP7FbqOl6KBjNpAzPNRIIdcSTW9Nxt2DIfXvW14mpqYeoG+04D35+5R54fRFtrh9VuJodapYy3ogvd8B8/BYHw61UG29Bt+8/wDwoNY6FR5Ybao4uC3ToFFlgvMxtuLj8Pmg1phWLorvdyyW2MHJYI4btLrbXFBr+i655BOiU5sN3vNt9lZPH0cL3cGlQd7+zhTamh+K1VrdLXlg/wAsbT/5Ls65x5DqA0PkvoHEWdUSSTnnd1h7gF0dFUOxeaftG4UabSrDMTa2zKumMZNtrmH6OavS65R9oDBP4joCyvY28mH1AkvwY7qu+I8EHldERAREQEREBVVEQVBV196sVQUF5zFxtW10fxp+E1wcbmB+Ujfn3LUA2VSN4UtWLRqWzFltivF6e8OusnY+ATQuEkEguC3O3PsV5DrRnV1gAud4DpHNhTxFJeSlJzZ7PML72kqYaqET0MrZIztZfYfl2LnZMU45+z7Dh87Hyq++rfRMDy426Nw53VOlcNkTv6la2ZjiGm7Xn1XZH91lWh0oruOpYejcIXZC5N7BXPZePIdYZrIieojFDE4OcWG3asqsfIyO2s4C+wbysb3vc0uJ6KMDNztv7J3J1Tte5+s7UZt3nh+6+P0tx1uocNpH3t+K4H3JjmlUcUbqPDHZ5h030+q1GjmjlVpHXWBLKdhvLMfgOa9uDB36rPnPKeUi0ThxT+ZS9EcGNVU+fyt+5hPUBHpO/ZfXOb51W2H4UBzPtP8A2HxU+ppWUEUWHUDA2TVswbQxvtH/AFmVaynZSwBgya0XJO/iSvc+bQK24jEUZtJKdRp3jie4J0DY4w1os1osByWWmYaiV1Y4ENcNWIHaG8e/b4K2tBfq0rPTmyJ9lu8/LvRECni6QSVB2SHqn8o2Hv296xU8PSNfP/MdcfpGQ+vethVstGymiyMvUFtzd58Fl6ANaGtFgBYBBrHQclDjh15pn2yBDB3fuVt6n7mB8lrkDIcTuCshpeihaw5kDrHid58UGqnj6OJ77bBkOaxtphFE0H1RmVsamLXlihA2nXd2D97K2si+51B6UhDB37fddRWshpyYWuIzd1vHNQ8Xb0VCbDN5DQvo/NwAABkmBYT/AB7yiYFhGrrR9MJ5R+VvWPuHvQentFcL/guiuFYaRZ1NSsY4fmtn77rcJZFFFrsewuLG8Ar8LmF46unfCeWsCL9o2rYqhF0HgqvopsOxCooqhurNBI6N44EGxUZdY8vWi5wfTb+LQstTYozpDYZCVoAd45HvK5OgIiICIiAiIgIiIKqoPgrVUFBcW32LPSV1TQTCWmldG8cN6wDkVeCDkQpMbZVtNZ3D62i03uwR4hTNeNhczf2hbqn0hwacDUrDEfZddtvkuc9CHbDZV82l3AFaLcek+zp4vMcjH1bv8uoDFKAi4xOP+tv0WKbG8KiF5MSa79Lr/wDaFzUUlSdkZPes0eE1kuXRgdrgsfhK/V6J89lmOqw+uqdM6CnB8zp3SvPrOyv818ziWPV+Ku1JZCGHZFHkPDepVJow6Qgz1AaODBcr6GioMMwstcGNdL6pcNZ57B9FupgpX2c/keRz541aevpDR4LonUVrmzVmtBBtt6zh8l0CkqY8OiZQYbCwvaMmeqzm4/LaVAY6pqcgDTxcdr3fIe9TqdkVLHZgDGjMknbxJO9bXhbqjo444nEvMk0h1pJXbXH5DgFqaqL+ITOijzpIzaR+6Rw9UcuPhxSGqlxA9HE50dJ60oydIODeA5+HFb1raeOlDWhkcUbdgyDQFUaKd7KeJ0kh1WNGai08bmtkqqjqyPFyCfQaNg+vNTHUzq6YVLmltMw3hYRYvPtkcOA71FmBrqgwNzp4z9672nez9fDigx0sZmkfVvBHSC0YO5n77fBSCxZ9WwssFVMKeEv1dZxyY0es7cEEKRnnFc2MZxwdd36tw7tvgpBjV9LTGCDVc7WkJ1nu4k7SsdaXBjYIzaWY6jTwG89wQRKaPppZan1XHUZzaN/eb+5W9H01ebejC23+Y/QfFT39HR0hNupG3IDaeAVtLTuigAkt0riXPtxP+rIMLorAk7AvqvIRhBr9I8b0nkbeNjfNKcnZmQXEdzR4lfFaR1Ro8KeyK5nnPRRgbbngvQ/k60ZGimg2G4YWgThnS1BtmZHZm/Ze3cFJWH1SIiiiIiD4jyqaJf7YaE1VJEwOraf+0UvHXaDl3gkeC8cFpaSCLEL38vKPlt0Jdo3pUcSpIiMOxImQWGTJfWb8x28kHLkS1kQEREBERAREQEREFb2V4KsCqEGZvIkKRGXX2jwURpIWVjjwQbGKR4tbVU+F8x2OYO5amOQj1T7lNhldujPeQqjcRMc/8SZ5HBvV+GfvWypY4ovQYGned5WlhknNrdG3tuVPihD/AMWR8nK9h4BBtRXMDiyMOmkGWqzceZ2BZWUz6gh1Y4OaMxC30B2+135LFBqRsDWANaNgAsFeK3XOpTM6Z+83s0dp+iqNi+eOmjMkjg1jd6upjJXSNfUgspmkFkJ2vPF308VDipwx3nFVIJJG5gnJrOwfPaqiaWtOrATFT75tjnfp4dvhxQbqed9fIaOjdq6uU0w2Rj2R+b4K11CylibHCzVY0WACULmU0TYY2hrG7AFsurMzmg0j7MBLsgBckqDTtNXP524ERtygaeG93fu5dqlVERxGUtZ/cmGznfziNw/Lx4rKW2y2ILHWa0ucQABck7lDpGGeR1Y8GzxqxA7mce/b4JN/bZzTM/AZ+M7idoZ8z4b1mqpzBEGxgOmk6sbefHsG1BgePOq0Rf4UBDn837h3bfBTNVWU1OKeBsYJccy5x2uJzJ8VrdIcRfQ0Ihp2l9ZUnooWNzJJyug2egOCf7Z+Uxk72a+GYGRK+/oulv1Rz6wv/lXpQbF8f5M9EG6G6H01G9o8+nAnq3f8wjZ2DZ3L7FYshERAREQF89pnorSaYaMVeE1VgZG60MlrmKQei4f62Er6FUOxB4QxnCazAsXqcMr4nRVNNIY3tI4bxyO0HgoC9Q+Wnyb/AO0uG/x3C4b4pRsPSMbtniGdv1DO3HZwXl9ws4gi1kFEREBERAREQEREBVCoiC8FZGuHFYgVc0hBLjeOIUyKZo2vaO0rXMc3fZS4pGj/AOIjaw1DfVDnfpaVsIZp321I2tHF5+QWohn2WY49g+q2ML53eiGMHM3Ko2kUAfnUSOkHsnJvhv71MZVsH3dNH0pGVmZNHadnzWvhgD7GZ7peRNmjuHzutpDqtaGtAAGwBVGSOldM4Pq3iSxuIh6A7t/etgFHYckmqo6do1yS93osaLud2BBK1wwaxIAG0kqyKokxIhjXOjovWdsM3IcG896itp5ash9WA2La2AG/9R39mztU9ptayDcsZG6EMY0Na0WAAyAWmxEv6fzSlP35F3O2iNvE8+AQ4jJ0vmtLZ05HWcc2xjiefALZU9PT01I4l/F8krzm47ySg0wZDQUp9WNguScyTx5krFSxPkkdVzts9wtGw/4bfqd/7KQad9dK2pkaW0zTeGNwsXH2yPgO9ZCLHNBjnnjpoXzSvDI2DWc47gtp5I9FpdKdInaZYnC4UNK4x4fE8ZOcPX7r+PYvmcNwir8oulDcCoHOZhlMQ+uqW7LDcOe4eO5emsNw6lwnD6egooWw00DAyNjdgAU2sJQFlVEUUREQEREBERBRwuvO3ln8lbqSWfSjAoCYXnWraaMfhnfI0cOI3bdmz0UrXxtkaWuALSLEEXBCDwFZF2zys+R+TCXzY9o5A5+Hnr1FJG25gO9zR7PLd2bOKEWQUREQEREBERAREQVCvBWNXA5oM7CpMblDa5Z43jiiNnC7YtlA7YtNFLa3Vce5T4ZJDbVjA5uKo3sDlMFTFCB0jwDuG0nuWngjkf6cxA4MGr+62lLDFFmxgBO120ntO9ESmSVVRlG3oIz67xd3cN3f4KZTUsUF3Nu57vSe43c7vWOMo+sYx/RsBll9iPMjt4d6onAgC5NgFDM8taSykOpDsdPb3N49uztVG0slSdascCy9xA09Udp9b4clnmqo6fVYAXyO9CJm0/tzQXMbBQU5NwyNubnE5k8Sd5V1O59fI19S0spmm7ITtedznfIeKwR0r5pGz1ZBcDdkQ9Fn1PNTAbINw5zZGbl8nWtxDSTGo9GtH269TKbVEw9GFm8k8h+2aNrcT0kxZuj+jUZnqX/jVA9CFu8k7u3uGa7xoNoNh+heE9BBaatlANTVOb1pXfJu2wUmViGfQvQ+g0L0fiwyhbrH0ppiOtK/eT8huC+kQCwRRRERAREQEREBERAREQWua1zSCAQdoO9cJ8p3kSbVmbGtFYWsmN3z0INg87SY+B/L4LvCoRdB4Fnhkp53wzRujlYdV7HixaRtBCxr2Dp95KsG04idUEeZ4oB1KuMDrcA8esPevMmlugmPaGVZhxWkIiJ+7qY+tFIOR3Hkc0HzKJZEBERAREQFcFaqhBe3as7Co4uszCeSCdCVsICtVFrHeB3KfC0m13uPLYqjcRSsY3We4NHEmymw1RdYQxPkPG2q3xK1tNFG1wcGjW4nM+K2EdXEw21tZ3stBcfcgnxwTzD7+azN8cWV+07fCyms83o4b9SKMbTsCgRvqpcmMbC32n9Y+Ay96mQUcTHiRxdLKNj5Dcjs3DuVRcJqmqyp2mGP+bIMz2N+Z8FJp6WKnB1AS93pPcbud2lXtWrxHSKloZBTQh1VWPOqyCIaxJ52QbWaeKmhdNM9rI2i7nONgFrcIwzHfKNXuoMCY6mwxjrVFfICBbeBz5fBfTaLeSPGdKZ4sT0ye+joQQ+LDonWe4fm9n49i7nh2G0mE0MVFQU0dPTRDVZFGLABSZWGn0P0MwjQvCxQ4ZBZzs5p35vldxJ+WwL6S1kRRRERAREQEREBERAREQEREBERAUWtw6kxKkkpK6miqaeQWfFMwOa7uKlIg4Xpn9nylqTJWaLVQppDd3mc9yw8mu2t779y4Zj2i2N6NVRp8Xw6eldfJz2dR/Nrth7l7nIB2qNW4fR4lTOpq2lhqYHelHKwOae4oPBVlRepNJPIDoziuvNhL5sKnOeqwmSK/wCkm47iuU495CdMcHLn0sMGJwDY6lf1rc2usb9l0HMUUzEMKxDCZzDiFFUUknszxlhPZfaoaAqhUVQguBWRhPBYwsjEEmMuysB4qdCHm3XA7AoUZzUuOaNmbntHaURs4IWu9MufyccvDYtvTNawANaGjkLL51uLUsVhrOeeDBdfSYTgOmGPav8ACNHajo3bJqhuo3tu6wVE+IgC5OSi1WkVBRu6JrzUTnIRQ9Y34L7bCPIPjOIFsmk+PNjjO2mos+4uIA9x7V1LRnydaLaKNacMwuITjbUTfeSE8bnZ3WTZpxTBNAdNtM9V88ZwDDH568zT0rhybkfGy7Joh5M9HdDYw+jpunrrdasqAHSHs9nuX2FgqqKoBZVREBERAREQEREBERAREQEREBERAREQEREBERAREQYailgq4jFUwRzRHayRocD3FfKYj5K9CsUuZ8ApWOO10AMZ/wCmy+xRByas+z1obUEmCXE6U7hFO1wH9TSfetNP9mvC3E+b6Q1jB/zIGv8AgQu5Ig4Efs0x36ukr7c6Uf8AssrPs1U/r6TTW/LSj/2XeEQcYpvs4aOst51jGKTW3RmNgPi0r6Cg8h2g1CQXYdNUuG+onc6/cLD3Lo6INPheiuA4LY4bg9FTOGx0cLQ7x2rcBEQEREBERAREQEREBERAREQEREH/2Q=="; */
  pictureTemplate: boolean = false;
  storyTemplate: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  setPictureTemplate(){
    this.storyTemplate = false;
    this.pictureTemplate = true;
    this.openGallery();
    console.log("User selected picture template.");
  }

  setStoryTemplate(){
    this.pictureTemplate = false;
    this.storyTemplate = true;
    console.log("User selected story template");
  }

  openCamera(){
    console.log("Opening Camera");
     Camera.getPicture({
        destinationType: Camera.DestinationType.FILE_URI,
        targetWidth: 1000,
        targetHeight: 1000,
        quality: 10,
        encodingType: 0, //For JPEG pictures
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = imageData;
    }, (err) => {
        console.log(err);
    });
  }

  imagePicker(){
    ImagePicker.getPictures({
    maximumImagesCount: 1})
    .then((results) => {
      this.base64Image = 'data:image/png;base64,'+results;
  for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
  }
}, (err) => { });
  }



private openGallery (): void {
  let cameraOptions = {
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: Camera.DestinationType.FILE_URI,      
    quality: 100,
    targetWidth: 1000,
    targetHeight: 1000,
    encodingType: Camera.EncodingType.JPEG,      
    correctOrientation: true
  }

  Camera.getPicture(cameraOptions)
    .then(file_uri => this.imageSrc = file_uri, 
    err => console.log(err));   
}

  }

