import './componentStyle/footer.css';

function FooterComp() {
    return ( 
        <>
            <footer>
                <section style={{display: 'flex', width: '80%', justifyContent: 'space-around'}}>
                    <div>
                        Social Media
                    </div>
                    <div>
                        Kontakt
                    </div>
                </section>
                <hr />
                <section style={{display: 'flex', width: '80%', justifyContent: 'space-between'}}>
                    <div>
                        EntreTech GmbH
                    </div>
                    <div style={{display: 'flex', width: '80%', justifyContent: 'flex-end', gap: '20px'}}>
                        <p>AGB</p>
                        <p>Impressum</p>
                        <p>Datenschutzerklärung</p>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default FooterComp;