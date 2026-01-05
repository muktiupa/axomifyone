import { useEffect, useState } from "react";
import { CheckCircle2, CloudUpload, Hammer, MessageCircle, Phone, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import EnquiryForm from "@/components/EnquiryForm";
import { useToast } from "@/hooks/use-toast";

interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    iconType: string;
}

const Pod = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    // Form State
    const [activeForm, setActiveForm] = useState<"order" | "hire" | "upload" | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<string>("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/data/products.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                toast({
                    title: "Error",
                    description: "Failed to load products. Please try again later.",
                    variant: "destructive",
                });
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [toast]);

    const handleOrderClick = (productTitle: string) => {
        setSelectedProduct(productTitle);
        setActiveForm("order");
    };

    const closeForm = () => {
        setActiveForm(null);
        setSelectedProduct("");
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">


            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
                    <div className="container mx-auto max-w-6xl text-center">
                        <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 bg-primary/5 text-primary">
                            <Zap className="w-3 h-3 mr-2 fill-primary" /> 24-Hour Express Delivery*
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                            Premium Print on Demand Services
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            Bring your ideas to life with our high-quality printing solutions.
                            From business materials to personalized gifts, we print it all.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                className="h-12 px-8 text-lg gap-2 shadow-lg shadow-primary/20"
                                onClick={() => setActiveForm("upload")}
                            >
                                <CloudUpload className="w-5 h-5" /> Upload Design
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 px-8 text-lg gap-2"
                                onClick={() => setActiveForm("hire")}
                            >
                                <Hammer className="w-5 h-5" /> Hire Designer
                            </Button>
                        </div>
                        <p className="mt-4 text-xs text-muted-foreground">*Charges apply for express delivery within 24 hours.</p>
                    </div>
                </section>


                {/* Products Section */}
                <section className="py-20 container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Printing Services</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Choose from our wide range of printing materials and formats.
                            Top quality guaranteed for every order.
                        </p>
                    </div>

                    {loading ? (
                        <div className="text-center py-20">Loading products...</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    iconType={product.iconType}
                                    onOrder={() => handleOrderClick(product.title)}
                                />
                            ))}
                        </div>
                    )}
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Print Your Ideas?</h2>
                        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Whether you need a single custom mug or bulk business cards, we've got you covered.
                            Contact us now for a quote or quick consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Button size="lg" className="h-14 px-8 text-lg bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2">
                                <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
                            </Button>
                            <Button size="lg" className="h-14 px-8 text-lg gap-2">
                                <Phone className="w-6 h-6" /> Call for Inquiry
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            {/* USP Grid */}
            <section className="py-12 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-start gap-4 p-6 bg-background rounded-xl border shadow-sm">
                            <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Fast Delivery</h3>
                                <p className="text-muted-foreground text-sm">Doorstep delivery within 24 hours available for select locations.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-background rounded-xl border shadow-sm">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Premium Quality</h3>
                                <p className="text-muted-foreground text-sm">We use top-grade materials and latest printing technology.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-background rounded-xl border shadow-sm">
                            <div className="p-3 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                                <Hammer className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Custom Design</h3>
                                <p className="text-muted-foreground text-sm">Upload your own or work with our expert designers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Forms */}
            <EnquiryForm
                isOpen={!!activeForm}
                onClose={closeForm}
                type={activeForm || "order"}
                productName={selectedProduct}
            />
        </div>
    );
};

export default Pod;
