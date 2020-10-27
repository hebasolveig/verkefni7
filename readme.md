# Verkefni 7

## Lýsing

Í verkefni 7 ætlum við að útfæra almenna útgáfu af [reiknirit Sesars](https://www.visindavefur.is/svar.php?id=5735) (e. [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)) fyrir íslenskt stafróf. Einnig ætlum við að útbúa „viðmót“ fyrir notanda til að slá inn strengi. Viðmótið er ekki alvöru vefviðmót þar sem tekið verður við inntaki frá notanda með `prompt` og `confirm`.

### Reiknirit Sesars

Upprunalegt reiknirit Sesars hliðrar öllum stöfum stafrófs um þrjá stafi og seinustu þrír stafir verða að fyrstu þrem stöfum stafrófs. Í ASCII verður `A` að `D`, `B` að `E`, `X` að `A` o.s.fr.

Í okkar almennu útgáfu verða allir 32 stafir íslensks stafrófs ásamt því að hliðrun getur verið hvaða stafur sem er á bilinu `[1, 31]` (þar sem hliðrun um `0` eða `32` endar í sama streng.)

Gefinn er grunnur að `encode` og `decode` föllum með lýsingu á inntaki og úttaki í [`jsdoc`](https://jsdoc.app/). Einnig eru gefin „assertion“ fyrir fjögur tilvik sem eiga að vera sönn um föllin. Hægt er að nota þau sem prufur fyrir útfærslu á föllunum, þegar þau eru rétt útfærð ættu engar villur að koma upp í `console` þegar `index.html` er opnað. Í byrjun eru villur:

```text
Assertion failed: kóðun á A með n=3 er D
Assertion failed: afkóðun á D með n=3 er A
o.s.fr.
```

Ekki er krafa um að skrifa staðfestingu á inntaki í `encode` og `decode` föllum, gera má ráð fyrir að alltaf séu réttur strengur og rétt heiltala séu send þangað inn.

### Viðmót

Þegar `index.html` er opnað skal birta `prompt` sem spyr notanda: `'Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“'`. Ef hvorugur af þessum strengjum er slegin inn skal birta `Veit ekki hvaða aðgerð „${input}“ er. Reyndu aftur.`. Byrja skal ferlið aftur frá byrjun.

Ef slegin er inn rétt aðgerð skal spyrja um hliðrun: `Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]`. Ef gildi sem slegið er inn uppfyllir þetta ekki skal birta `${input} er ekki heiltala á bilinu [1, 31]. Reyndu aftur.`. Byrja skal ferlið aftur frá byrjun.

Seinast skal biðja um streng til að hliðra með: `Gefðu upp strenginn sem á að ${action} með hliðrun ${n}:`. Ef ekki er gefinn upp stengur skal birta `Þú gafst ekki upp streng. Reyndu aftur.` og byrja ferlið aftur. Ef gefinn er upp strengur sem inniheldur stafi sem ekki eru í íslensku stafrófi (bil þar með talið!) skal birta `Þú gafst upp stafi sem ekki er hægt að ${action}: ${invalid.join(', ')}. Reyndu aftur.` og byrja ferli aftur.

Að lokum er niðurstaða fyrir gefinn inntök birt notanda.

### JavaScript kóði

Gefin er grunnur og eru athugasemdir þar.

Fyrir inntak og að birta notendum gögn skal nota `alert` `confirm` og `prompt` föllin.

Gera skal ráð fyrir að vinna aðeins með hástafi. Hægt er að nota `toLocaleUpperCase()` til að breyta streng í hástafa streng (gott er að venja sig á að nota þetta fall í stað `toUpperCase()` þar sem það tekur tillit til mismunandi stafrófa).

Sýnilausn notar eftirfarandi föll og virkni í JavaScript til að leysa verkefnið:

* `do while`
* `for`
* `continue`
* `toLocaleUpperCase()`
* `toLocaleLowerCase()`
* `Number.parseInt()`
* `Number.isInteger()`
* `? :`, ternary virkja

Þegar verið er að skrifa JavaScript kóða gildir það sama og þegar við skrifum HTML og CSS, að passa upp á inndrátt og skipuleggja og skila af okkur læsilegum og „snyrtilegum“ kóða.

Dæmi um kóða sem uppfyllir þessar kröfur ekki:

```javascript
function bla(a, b)
{
if (a) {
  let x = a + 1
    return x
}
else {
return a +b;
}
}
```

og sami kóði „lagfærður“:

```javascript
function calculate(a, b) {
  if (a) {
    let x = a + 1;
    return x;
  } else {
    return a + b;
  }
}
```

## Mat

* 10% Snyrtilegur kóði með sjálfum sér samkvæmann inndrátt
* 25% `encode` fall útfært
* 25% `decode` fall útfært
* 20% Tekið við inntaki frá notanda skv. forskrift
* 20% Inntak frá notanda staðfest skv. forskrift

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 19. október 2020.

## Skil

Skila skal í Canvas í seinasta lagi fyrir lok dags þriðjudaginn 27. október 2020.

Skilaboð skulu innihalda slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)). Notendanöfn þeirra eru:

* `GaddiSunshine`
* `boxandri`
* `StimmiKex`
* `jonnigs`
* `Tobbasn`
* `thth168`

Hver dagur eftir skil dregur verkefni niður um 10%, allt að 30% ef skilað föstudaginn 30. október 2020 en þá lokar fyrir skil.

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

> Útgáfa 0.1
