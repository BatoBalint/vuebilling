# Bató Bálint

## Hogyan kezdj neki?

1. Jelentkezz be a GitHub szolgáltatásába a böngésződben és a VSCode szerkesztőben
2. A böngészőben forkold ezt a repository-t
3. A Settings > Pages oldalon a Source értékét állítsd gh-pages-re és mentsd el (Save)
4. Clone-ozd a saját(!) repodat a VSCode-ba
5. Írd át a Readme.md elején a [Név] részt a saját nevedre, majd commitolj és pusholj.
6. Telepítsd a függőségeket
```
  npm install
```
7. Indítsd el a fejlesztői szervert
```
  npm run serve
```

## Hogyan dolgozz?

A főbb pontokon commitolj és pushold fel a változtatásokat. Ezt érdemes minél sűrűbben megtenni, hisz így adod majd be a feladatot.

## Hogyan fejezd be?

Add be a repod linkjét. Figyelj oda, hogy az utolsó commit idejét fogjuk nézni.

# Feladat

Készíts raktárnyilvántartó programot. A tételekről nyilvántartjuk a nevét (title), az árát forintban (price) és a darabszámát (quantity).
1. Készíts táblázatot, ami megjeleníti a raktárban nyilvántartott tételeket. Figyelj arra, hogy a táblázatnak legyen fejléce az oszlopok megnevezésével! (__5p__)
2. Adj a táblázathoz egy plusz sort, amiben űrlapelemek vannak és egy újabb tételt lehet hozzáadni vele. Nem kell foglalkoznod azzal, ha egy már létező nevű(title) tételt adnak hozzá. (__3p__)
3. Adj hozzá a táblázathoz egy új oszlopot "Operations" néven, amiben van két gomb egy törlés (X) és egy szerkesztés (Edit) (__1p__)
4. A törlés gomb megnyomásával törlődjön a tétel. A tétel egyedi azonosítója a title. (__2p__)
5. Az edit gomb megnyomásával megjelennik három beviteli mező, valamint egy "Save" gomb. A Save gomb megnyomására mentődjön a tétel. (__2p__)

Plusz feladatok

1. A feladatot komponensek segítségével oldd meg. (__+2p__)
2. Adj a táblázathoz egy plusz oszlopot összérték néven, ahol az adott tétel össz értékét jeleníted meg (price * quantity) (__+2p__)
3. Adj a táblázathoz egy plusz sort ami tartalmazza a raktárban tárolt tételek összértékét. (__+2p__)
4. Módosítsd a működést a következőképpen: Amennyiben létező tételt adnak hozzá ár nélkül, akkor a megadott mennyiséggel növeld a már meglévő tételsor mennyiségét. Ár megadásánál írd felül a meglévő sort. (__+2p__)

Értékelés:

* 0 - 5: 1
* 6 - 7: 2
* 8 - 9: 3
* 10 - 11: 4
* 12 - 18: 5
* 19 - 21: 5 5 (plusz egy ötös)
