import { ArrowRight, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductProps {
    title: string;
    description: string;
    price: string;
    iconType: string;
    onOrder?: () => void;
}

const getIcon = (type: string) => {
    switch (type) {
        case "printer":
            return <Printer className="h-10 w-10 text-primary" />;
        case "sunboard":
            return <div className="h-10 w-10 flex items-center justify-center bg-primary/10 rounded-md text-primary font-bold">SB</div>;
        case "a4":
            return <div className="h-10 w-10 flex items-center justify-center bg-primary/10 rounded-md text-primary font-bold">A4</div>;
        case "glossy":
            return <div className="h-10 w-10 flex items-center justify-center bg-primary/10 rounded-md text-primary font-bold">GP</div>;
        case "gsm300":
            return <div className="h-10 w-10 flex items-center justify-center bg-primary/10 rounded-md text-primary font-bold">300</div>;
        case "mug":
            return <div className="h-10 w-10 flex items-center justify-center bg-primary/10 rounded-md text-primary font-bold">☕</div>;
        case "tshirt":
            return <div className="h-10 w-10 flex items-center justify-center bg-primary/10 rounded-md text-primary font-bold">👕</div>;
        case "idcard":
            return <div className="h-10 w-10 flex items-center justify-center bg-primary/10 rounded-md text-primary font-bold">🆔</div>;
        default:
            return <Printer className="h-10 w-10 text-primary" />;
    }
};

const ProductCard = ({ title, description, price, iconType, onOrder }: ProductProps) => {
    return (
        <Card className="group hover:shadow-lg transition-all duration-300 border-muted bg-card">
            <CardHeader>
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {getIcon(iconType)}
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{price}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-sm">{description}</p>
            </CardContent>
            <CardFooter>
                <Button
                    variant="ghost"
                    className="w-full justify-between hover:text-gray-600 group-hover:text-gray-600"
                    onClick={() => onOrder && onOrder()}
                >
                    Order Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
