const movieVideos = {
    "1294203": "https://wpr0m81kdo6m.cdn-centaurus.com/hls2/01/08546/ihbezsv5itaq_,l,n,.urlset/index-f1-v1-a1.m3u8?t=8Eov-pAiao1eoFAzJtiyH_N1Qh7w482lC-OEC3z6o4w&s=1740157394&e=129600&f=42730779&srv=rfr02gmo75cn&i=0.4&sp=500&p1=rfr02gmo75cn&p2=rfr02gmo75cn&asn=264619",  // Culpa mia"
    "939243": "https://oto5oedn21kx.cdn-centaurus.com/hls2/01/08183/d8z9545l7k7s_,l,n,.urlset/index-f2-v1-a1.m3u8?t=4f_C_yFLKpkXo-93fUJKPjpo9ZWwiZ2rzubdenuzlbU&s=1740164672&e=129600&f=40916559&srv=mhe7qdnw6bsc&i=0.4&sp=500&p1=mhe7qdnw6bsc&p2=mhe7qdnw6bsc&asn=264619"   // Sonic 3"
};

// Función para obtener la URL del video por ID
function getMovieVideoUrl(movieId) {
    return movieVideos[movieId] || "N/A";  // Si no hay URL, devuelve "N/A"
}