<script>
	import cover1 from '$lib/images/magazines/cover-geschichte.webp';
    import cover2 from '$lib/images/magazines/cover-leo.webp';
    import cover3 from '$lib/images/magazines/cover-zweitauflage.webp';
    import cover4 from '$lib/images/magazines/cover-zeit-generisch.webp';

    const MAGAZINES = [
        {
            id: 1,
            name: "ZEIT GESCHICHTE",
            img: cover1,
            url: 'https://abo.zeit.de/zg-testen?icode=01w0295k1001angdisint2401&utm_medium=display&utm_source=zon_printbanderole&utm_campaign=standard&utm_content=01w0295k1001angdisint2401&wt_zmc=disint.Int.zabo.zon_printbanderole.standard.x'
        },
        {
            id: 2,
            name: "ZEIT LEO",
            img: cover2,
            url: 'https://abo.zeit.de/zl-geschenk-n1?icode=01w0295k1001angdisint2401&utm_medium=display&utm_source=zon_printbanderole&utm_campaign=standard&utm_content=01w0295k1001angdisint2401&wt_zmc=disint.Int.zabo.zon_printbanderole.standard.x'
        },
        {
            id: 3,
            name: "ZEIT Studienführer",
            img: cover3,
            url: 'https://abo.zeit.de/zeit-studienfuehrer/?icode=01w0295k1001angdisint2401&utm_medium=display&utm_source=zon_printbanderole&utm_campaign=standard&utm_content=01w0295k1001angdisint2401&wt_zmc=disint.Int.zabo.zon_printbanderole.standard.x'
        },
        {
            id: 4,
            name: "DIE ZEIT",
            img: cover4,
            url: 'https://premium.zeit.de/abo/diezeit?wt_zmc=fix.int.zonpme.zeitde.epaper.z+.home.bildtext.bildtext&utm_medium=fix&utm_source=zeitde_zonpme_int&utm_campaign=epaper&utm_content=z+_home_bildtext_bildtext'
        
        }
    ]
</script>

<section>

    <div class="flex flex-col gap-8 mx-auto items-center md:px-20">

        <h2 class="text-xl font-bold">Jetzt entdecken!</h2>
    
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
            {#each MAGAZINES as magazine, index (magazine.id)}
            <a href={magazine.url} target="_blank" rel="nofollow noopener" class="flex hover:scale-105 focus-visible:scale-105 transition-transform">
                <figure class="flex flex-col gap-4">
                    <img class="aspect-[3/4]" src={magazine.img} alt="cover1" />
                    <figcaption>{magazine.name}</figcaption>
                </figure>
            </a>

            {/each}
        </div>

    </div>


</section>


<style>

    section {
        background-color: var(--z-background-20);
        background-image: linear-gradient(to right, #4a4a4a 0%, #2c2a2b 30%, #494a4e 60%, #3b3b3d 80%, #4a4a4a 100%);
        color: #fff;
        padding: 1.5rem 0 1.875rem;
        text-align: center;
    }
</style>