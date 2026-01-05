import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/utils/emailService";
import { Loader2 } from "lucide-react";

interface EnquiryFormProps {
    isOpen: boolean;
    onClose: () => void;
    type: "order" | "hire" | "upload";
    productName?: string;
}

const EnquiryForm = ({ isOpen, onClose, type, productName }: EnquiryFormProps) => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        file: null as File | null,
    });

    const getTitle = () => {
        switch (type) {
            case "order":
                return `Order ${productName || "Product"}`;
            case "hire":
                return "Hire a Designer";
            case "upload":
                return "Upload Your Design";
            default:
                return "Enquiry";
        }
    };

    const getDescription = () => {
        switch (type) {
            case "order":
                return "Fill details to place your order. We'll contact you for confirmation.";
            case "hire":
                return "Let us know your requirements and we'll connect you with a designer.";
            case "upload":
                return "Upload your print-ready design and we'll handle the rest.";
            default:
                return "Send us your enquiry.";
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await sendEmail({ ...formData, type, productName });

            toast({
                title: "Request Sent!",
                description: "We have received your request and will contact you shortly.",
            });

            onClose();
            setFormData({ name: "", phone: "", email: "", message: "", file: null });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send request. Please try again.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{getTitle()}</DialogTitle>
                    <DialogDescription>{getDescription()}</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number (Required)</Label>
                        <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email (Optional)</Label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                        />
                    </div>

                    {(type === "upload" || type === "order") && (
                        <div className="grid gap-2">
                            <Label htmlFor="file">Upload Design</Label>
                            <Input
                                id="file"
                                type="file"
                                onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
                            />
                        </div>
                    )}

                    <div className="grid gap-2">
                        <Label htmlFor="message">Message / Requirements</Label>
                        <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Describe your requirements..."
                        />
                    </div>

                    <DialogFooter>
                        <Button type="submit" disabled={loading}>
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Submit Request
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EnquiryForm;
