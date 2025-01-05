import Head from "next/head";
import Layout from "../components/layouts";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Diabetes Care</title>
                <meta
                    name="description"
                    content="Diabetes - Know your risk, know your response"
                />
            </Head>

            <section
                className="hero min-h-screen lg:min-h-[65vh] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
            >
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold text-white">
                            Kebiasaan Sehat Baru, untuk Kualitas Hidup Lebih
                            Baik
                        </h1>
                        <p className="mb-5">
                            Know your risk, know your response.
                        </p>

                        <Link
                            className="btn bg-emerald-500 text-white hover:bg-emerald-600 w-full max-w-xs border-emerald-500 shadow-lg hover:border-emerald-700"
                            href="/skrining"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                            Cek Risiko Diabetes
                        </Link>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="card bg-white shadow-lg">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold mb-5 text-primary md:text-justify text-center">
                                Apa itu Diabetes?
                            </h1>

                            <p className="mb-8 leading-relaxed text-justify">
                                <strong>Diabetes</strong> adalah penyakit kronis
                                yang ditandai dengan kadar gula darah yang
                                tinggi akibat gangguan produksi atau kerja
                                insulin. Insulin adalah hormon yang berperan
                                penting dalam mengatur gula darah.
                            </p>

                            <ul className="list-disc pl-8 text-left">
                                <li className="max-w-xl">
                                    <div className="mb-8">
                                        <h3 className="text-primary font-semibold mb-2">
                                            Diabetes Tipe 1
                                        </h3>

                                        <p>
                                            Diabetes tipe 1 umumnya disebabkan
                                            oleh gangguan autoimun yang merusak
                                            sel beta pankreas, sehingga tubuh
                                            tidak mampu memproduksi insulin.
                                        </p>
                                    </div>
                                </li>

                                <li className="max-w-xl">
                                    <div className="mb-8">
                                        <h3 className="text-primary font-semibold mb-2">
                                            Diabetes Tipe 2
                                        </h3>

                                        <p>
                                            Diabetes tipe 2, yang lebih umum
                                            terjadi, disebabkan oleh resistensi
                                            insulin atau penurunan produksi
                                            insulin, sering kali akibat pola
                                            hidup tidak sehat.
                                        </p>
                                    </div>
                                </li>

                                <li className="max-w-xl">
                                    <div className="mb-8">
                                        <h3 className="text-primary font-semibold mb-2">
                                            Diabetes Gestasional
                                        </h3>

                                        <p>
                                            Diabetes gestasional terjadi selama
                                            kehamilan dan meningkatkan risiko
                                            diabetes tipe 2 di masa mendatang.
                                        </p>
                                    </div>
                                </li>

                                <li className="max-w-xl">
                                    <div className="mb-8">
                                        <h3 className="text-primary font-semibold mb-2">
                                            Diabetes Sekunder
                                        </h3>

                                        <p>
                                            Diabetes sekunder disebabkan oleh
                                            penyakit lain atau penggunaan obat
                                            tertentu yang memengaruhi fungsi
                                            pankreas.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
                    <div className="card bg-white shadow-lg">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold mb-5 text-primary md:text-justify text-center">
                                Urgensi Skrining
                            </h1>

                            <p className="mb-5 leading-relaxed">
                                Pentingnya skrining diabetes tidak dapat
                                diremehkan, terutama mengingat komplikasi serius
                                yang dapat ditimbulkan oleh penyakit ini jika
                                tidak dikelola dengan baik. Skrining bertujuan
                                untuk mendeteksi diabetes pada tahap awal,
                                bahkan sebelum gejala muncul. Deteksi dini
                                memungkinkan penderita untuk segera mengambil
                                langkah pengelolaan, baik melalui perubahan gaya
                                hidup, pengobatan, maupun perawatan medis
                                lainnya. Dengan skrining, risiko komplikasi
                                seperti kerusakan saraf, mata, ginjal, jantung,
                                dan pembuluh darah dapat diminimalkan. Selain
                                itu, skrining juga dapat membantu menurunkan
                                beban ekonomi, karena biaya pencegahan jauh
                                lebih murah dibandingkan pengobatan komplikasi
                                diabetes.
                            </p>

                            <p className="mb-5 leading-relaxed">
                                Skrining sangat direkomendasikan untuk kelompok
                                berisiko tinggi, seperti individu dengan riwayat
                                keluarga diabetes, obesitas, hipertensi, atau
                                kadar kolesterol tinggi. Orang berusia di atas
                                45 tahun, wanita dengan riwayat diabetes
                                gestasional, serta individu dengan gejala
                                diabetes seperti sering haus, sering buang air
                                kecil, mudah lelah, atau berat badan yang
                                menurun tanpa sebab jelas juga disarankan untuk
                                melakukan skrining. Beberapa tes yang digunakan
                                dalam skrining meliputi tes gula darah puasa
                                (GDP), tes gula darah sewaktu (GDS), tes
                                toleransi glukosa oral (TTGO), dan tes HbA1c
                                yang memberikan gambaran kadar gula darah
                                rata-rata selama 2-3 bulan terakhir.
                            </p>

                            <p className="mb-5 leading-relaxed">
                                Pencegahan diabetes dapat dilakukan melalui
                                penerapan pola hidup sehat. Pola makan yang
                                seimbang dengan mengonsumsi makanan tinggi
                                serat, rendah gula, dan lemak jenuh sangat
                                dianjurkan. Aktivitas fisik teratur minimal 150
                                menit per minggu juga dapat membantu menjaga
                                kadar gula darah tetap normal. Menjaga berat
                                badan ideal, menghindari konsumsi rokok, dan
                                membatasi alkohol juga merupakan langkah penting
                                dalam mencegah diabetes. Selain itu, pemeriksaan
                                rutin bagi individu dengan risiko tinggi menjadi
                                kunci untuk mendeteksi diabetes lebih awal dan
                                mencegah komplikasi lebih lanjut.
                            </p>

                            <p className="mb-5 leading-relaxed">
                                Dengan skrining yang tepat dan kesadaran akan
                                pentingnya gaya hidup sehat, diabetes dapat
                                dikelola secara efektif, sehingga penderita
                                dapat menjalani hidup dengan kualitas yang baik.
                                Konsultasikan dengan tenaga kesehatan untuk
                                mengetahui risiko Anda dan lakukan tindakan
                                preventif sedini mungkin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
