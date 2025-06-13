# export_carbon_verifier.py

import torch
import torch.nn as nn

# Define a simple feedforward network for carbon credit verification
class CarbonVerifier(nn.Module):
    def __init__(self, input_dim=5, hidden_dim=20, output_dim=1):
        super(CarbonVerifier, self).__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.ReLU(), 
            nn.Linear(hidden_dim, output_dim)
        )

    def forward(self, x):
        return self.net(x)


def export_model(output_file='network.onnx'):
    # Initialize the model and set to evaluation
    model = CarbonVerifier(input_dim=5, hidden_dim=20, output_dim=1)
    model.eval()

    # Prepare dummy input matching the input dimensions
    dummy_input = torch.randn(1, 5)

    # Export the model to ONNX format
    torch.onnx.export(
        model,
        dummy_input,
        output_file,
        export_params=True,
        opset_version=10,
        do_constant_folding=True,
        input_names=['input'],      # optional
        output_names=['output'],    # optional
        dynamic_axes={'input': {0: 'batch_size'}, 'output': {0: 'batch_size'}}  # optional
    )

    print(f"Model successfully exported to {output_file}.")


if __name__ == "__main__":
    export_model()
