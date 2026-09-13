---
title: Emojik és a Windows
description: Minimális történelem, közepesen érdekes információk és a Windows emoji verziójának frissítése
date: 2022-05-21T19:00:00
tags: ['windows', 'windows 10', 'emoji', 'hun', 'interesting', 'fun', 'educational']
language: hu
proofReader: 'Horváth Gergely'
---

# Emojik és a Windows

Mint azt mindenki bizonyára tudja, lehet imádja, vagy épp utálja - de tudni biztos tudja, az internet egyik legelterjedtebb nyelvi eszköze lett az emoji. 💯🔥👌

Minden környezetnek megvan a saját kultúrája. Amíg e-mailekben kevésbé jellemzőek az emojik, és lelkünk mélyén megvetjük azokat a cégeket, ahol a marketinges úgy gondolta, hogy jó ötlet százötven különböző emojival rávenni minket, hogy menjünk el a találkozójukra, vegyük meg terméküket, frissítsük előfizetésünket, vagy hogy épp ez a világot megváltó általános felhasználói szerződés frissítés és olvassuk csak el (ugye mint mindenki szokta tenni).

## Történelem

Az emojik témája lassan történelem órán tanított téma lesz a mémóliógia mellett, viszont a mi témánk ma az Unicode emojik. Az Unicodért felelős szervezet már a 2000es évek elején boldogan élt és virult, tette dolgát, és foglalkozott azzal, hogy hogyan lehetnek a dolgok olyan egységesek, mint amilyenek azok ma. Az első emojik nem meglepően a Japán behatásra be is folytak már az unicode 4.0 sztenderdbe _(2003)_, viszont egészen a 6.0-ig _(2010)_ úgy itélték, hogy nem tartoznak az emojik az unicode szabvány hatáskörébe, így addig nem foglalkoztak a direktes művelésével és fejlesztésével.

Ebben a köztes időszakban az európai és amerikai piac is foglalkozott azzal, hogy hogyan kellene bevezetni ezeket az imádni való arcukat mutogató élőlényeket és egyéb szimbólumokat. A meglepő együttműködése az Apple és a Googlenek, az együttes nyomása érte azt el, hogy az unicodért felelős szervezet (Unicode Techincal Committee) foglalkozzon az emojikkal. Végülis 722 emoji került be az unicode 6.0 sztenderdbe.

Ezután nagyobb változást jelentett 2015 elején, amikor elkezdték szorgalmazni az úgy nevezett **\*z**ero **w**idth\* **j**oiner, avagy összekötő karakter használatát. Ennek a szerepe az, hogy jelöli, hogy egy emoji sorozat valójában egy karakterként jelenítendő meg. Na most ez valahol egy zseniálisan jó ötlet, mert így nem kell minden variációra új karakterkódot meghatározni. Például egy (tradicionális keresztény) család emojit nem úgy hozunk létre, hogy önálló karakter kódja van, hanem fogunk egy férfi emojit `👨`, egy összekötő karaktert, egy nőt `👩`, még egy összekötő karaktert és egy fiút vagy lányt `👦` és majd a szöveget megjelenítő szoftver ezt egy emojinak fogja mutatni: `👨‍👩‍👦`

```
👨 + \u200B-\u200D\uFEFF + 👩 + \u200B-\u200D\uFEFF +👦 = 👨‍👩‍👦
```

Ezt persze lehet még bővíteni, mondjuk bőrszínnel akár. Viszont felmerül a kérdés, hogy vajon, akkor a férfit és a nőt is úgy kéne csinálni, hogy van egy "ember" és ahhoz adjuk hozzá a kromoszómákat? Valószínűleg nagyon jól fizetett informatika technikai irodai munkások vitatkozhatnak ezeken a filozófiai kérdéseken éveken át mire bekerül egy emoji a sztenderdbe, de mi most nem fogunk.

Elkezdődött a számozott Emoji verziók megjelenése 2015 felénél, amikor is kiadták az Emoji 1.0-t az [UTR 51](https://unicode.org/reports/tr51/tr51-7.html)-es száma alatt. Ez vezette be a bőrszínek kezelését, mely karakterek számítanak emojinak és az első hivatalos ajánláscsokrot arról, hogy hogyan kell az emojikat megjeleníteni. Ennek az lett az eredménye, hogy legalább hasonlítanak a különböző kliensek (vagy akár operációs rendszerek) között az emojik, de nem feltétlen mindig ugyan azt az érzelmi többletet hordozzák.

## Egyediségek és Windows

Mint ahogy minden sztenderdnél számítanánk rá, így itt is vannak cégek, programok, amik túlbuzgóak és saját bővítésekkel rendelkeznek (ilyen például a személyes kedvencem, a csak Windows 10en látható nindzsa macska: `🐱‍👤`), ezen túl az is problémát jelent, hogy minden egyes fejlesztőbrigádnak saját felelőssége, hogy a sztenderdet kövesse és frissítse ennek megfelelően.

Ennek az írásakor a Windows 10 operációs rendszer utoljára 2019 májusi frissítésében kapott új Emoji verziót (amely név szerint az Emoji 12.0) és így már 3 év hátrányban van, és ez csak nő. Ezzel szemben a Windows 11 bevezetett új "Fluent emoji" készlete már az Emoji 14.0 verziót is támogatja. A kérdés az az, hogy a Microsoftnak ez az új frissítés egy valós technikai változtatást igényelt, vagy csak nem veszik a fáradtságot, hogy egy "elavult" operációs rendszerben frissítsék az Emojikat?

![Egy kép amin látszik, hogy Windows 10en lehet új emojikat használni](/images/posts/yt1f9UbfqqHlknfx-image-1653148385384.png)

Nem meglepő módon a válasz a kérdésre az, hogy megoldható, hogy az új Emoji készlet a "régi" Windowson is működjön. Persze ehhez egy szintű technikai varázslásra van szükség, viszont ez messze nem a legveszélyesebb dolog, amit egy felhasználó tehet a számítógépével (épp rád nézek, idegenhelyről letöltött futtatható fájl, ami indulásod után 10 milliszekundummal adminisztrátori engedélyt kérsz!).

## Frissítés

A Windows az emojikat a [Segoe UI Emoji](https://docs.microsoft.com/en-us/typography/font-list/segoe-ui-emoji) betűtípus családban tárolja. Sőt, a hivatalos oldalon nem is titkolják, hogy ez a két Windows verzió között különböző (íráskor: Windows 10 - 1.29; Windows 11 - 1.33), viszont bármilyen féle letöltést vagy hasonlót nem adnak, így hivatalos forrásból nem frissíthető.

Persze az, hogy valami nem elérhető hivatalos forrásból, az még sosem zavart senkit, és még ennél is kevésbé meglepő, hogy egy kedves Reddit felhasználó össze is állított egy lépésről lépésre végig vezető leírást hogyan kell a verziót frissíteni. Az eredeti leírás [ITT ](https://www.reddit.com/r/Windows11/comments/q85c70/how_to_get_the_new_windows_11_emojis_in_stable/hgqnra2/)olvasható el. Viszont mielőtt bárki belekezdene fontos megjegyeznem, hogy egyrészről **csináljon biztonsági mentést** az eredeti betűtípusáról, és **ne hullasson sok könnyet** azután, hogy rájön, hogy elfogja veszteni a ninja macskát, a dínó macskát és az összes többi macskafajtát.

A biztonsági mentés létrehozásához be kell navigálnunk a rendszer betűtípus tárhelyére (tipikusan: `C:\Windows\Fonts`) és innen a `seguiemj.ttf` fájlt kell biztonságos helyre **másolnunk**. Ezután az általunk letöltött újabb verziónak vélt `seguiemj.ttf` fájlt telepítjük az összes felhasználónak. _(Én ezt sikeresen kipróbáltam és működött - én egy önmagát 1.35-ös verziónak állító betűtípust használtam, viszont a beépített Emoji válogatóban nem jelentek meg az új karakterek.)_

Miután ezt megtettük örömmel láthatjuk az új Emojikat és érhetjük el őket a `Windows + .` gyorsmenüből, vagy csodálhatjuk meg őket akár az én kedvenc oldalamon, az [emojipedia.org](https://emojipedia.org/)-on.
